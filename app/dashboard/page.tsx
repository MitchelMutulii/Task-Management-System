'use client'

import { useState } from 'react'
import ThemeToggle from '../components/ThemeToggle'

interface Task {
  id: string
  title: string
  description?: string
  status: 'backlog' | 'in-progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  assignee?: string
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'User research plan',
      description: 'Create comprehensive research plan for Q2',
      status: 'backlog',
      priority: 'high',
      dueDate: '2024-03-15',
      assignee: 'Maya'
    },
    {
      id: '2',
      title: 'Competitor analysis',
      description: 'Analyze top 5 competitors in the market',
      status: 'backlog',
      priority: 'medium',
      dueDate: '2024-03-20',
      assignee: 'James'
    },
    {
      id: '3',
      title: 'Wireframe creation',
      description: 'Design wireframes for new features',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-03-18',
      assignee: 'Ava'
    },
    {
      id: '4',
      title: 'User flow mapping',
      description: 'Map out user journeys and flows',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2024-03-22',
      assignee: 'Maya'
    },
    {
      id: '5',
      title: 'Project setup',
      description: 'Initialize project repository and tools',
      status: 'completed',
      priority: 'low',
      dueDate: '2024-03-10',
      assignee: 'James'
    },
    {
      id: '6',
      title: 'Team onboarding',
      description: 'Onboard new team members',
      status: 'completed',
      priority: 'medium',
      dueDate: '2024-03-12',
      assignee: 'Ava'
    }
  ])

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    dueDate: '',
    assignee: ''
  })

  const [showNewTaskForm, setShowNewTaskForm] = useState(false)
  const [draggedTask, setDraggedTask] = useState<Task | null>(null)

  const columns = [
    { id: 'backlog', title: '📋 Backlog', color: '#fef3c7' },
    { id: 'in-progress', title: '🔄 In Progress', color: '#dbeafe' },
    { id: 'completed', title: '✅ Completed', color: '#dcfce7' }
  ]

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status)
  }

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTask.title.trim()) return

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      status: 'backlog',
      priority: newTask.priority,
      dueDate: newTask.dueDate || undefined,
      assignee: newTask.assignee || undefined
    }

    setTasks(prev => [...prev, task])
    setNewTask({
      title: '',
      description: '',
      priority: 'medium',
      dueDate: '',
      assignee: ''
    })
    setShowNewTaskForm(false)
  }

  const handleDragStart = (task: Task) => {
    setDraggedTask(task)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (status: string) => {
    if (draggedTask) {
      setTasks(prev => prev.map(task => 
        task.id === draggedTask.id ? { ...task, status: status as Task['status'] } : task
      ))
      setDraggedTask(null)
    }
  }

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444'
      case 'medium': return '#f59e0b'
      case 'low': return '#10b981'
      default: return '#6b7280'
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'High'
      case 'medium': return 'Medium'
      case 'low': return 'Low'
      default: return 'Medium'
    }
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="container">
          <div className="dashboard-nav">
            <div className="brand">
              <div className="brand-mark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12L10 18L20 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Mipango</span>
            </div>
            <div className="dashboard-actions">
              <ThemeToggle />
              <button 
                className="btn primary"
                onClick={() => setShowNewTaskForm(true)}
              >
                + New Task
              </button>
              <div className="user-menu">
                <div className="user-avatar">👤</div>
                <span>Welcome back!</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-content">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
              <div className="sidebar-section">
                <h4>My Hub</h4>
                <ul className="sidebar-nav">
                  <li className="active">📥 Inbox</li>
                  <li>📅 Today</li>
                  <li>⏰ Upcoming</li>
                  <li>👥 Team</li>
                  <li>📁 Archived</li>
                </ul>
              </div>
              
              <div className="sidebar-section">
                <h4>Projects</h4>
                <ul className="sidebar-nav">
                  <li>Website Redesign</li>
                  <li>Mobile App</li>
                  <li>Marketing</li>
                  <li>Personal</li>
                </ul>
              </div>
            </aside>

            {/* Main Board */}
            <section className="dashboard-board">
              <div className="board-header">
                <h2>Task Board</h2>
                <div className="board-stats">
                  <span>{tasks.length} total tasks</span>
                </div>
              </div>

              <div className="board-columns">
                {columns.map(column => (
                  <div 
                    key={column.id}
                    className="board-column"
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(column.id)}
                  >
                    <div 
                      className="column-header"
                      style={{ background: column.color }}
                    >
                      <h3>{column.title}</h3>
                      <span className="task-count">{getTasksByStatus(column.id).length}</span>
                    </div>
                    
                    <div className="column-content">
                      {getTasksByStatus(column.id).map(task => (
                        <div
                          key={task.id}
                          className="task-card"
                          draggable
                          onDragStart={() => handleDragStart(task)}
                        >
                          <div className="task-header">
                            <span 
                              className="priority-badge"
                              style={{ background: getPriorityColor(task.priority) }}
                            >
                              {getPriorityLabel(task.priority)}
                            </span>
                            <button 
                              className="delete-task"
                              onClick={() => deleteTask(task.id)}
                              aria-label="Delete task"
                            >
                              ×
                            </button>
                          </div>
                          
                          <h4 className="task-title">{task.title}</h4>
                          
                          {task.description && (
                            <p className="task-description">{task.description}</p>
                          )}
                          
                          <div className="task-meta">
                            {task.dueDate && (
                              <span className="task-due-date">
                                📅 {new Date(task.dueDate).toLocaleDateString()}
                              </span>
                            )}
                            {task.assignee && (
                              <span className="task-assignee">
                                👤 {task.assignee}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* New Task Modal */}
      {showNewTaskForm && (
        <div className="modal-overlay" onClick={() => setShowNewTaskForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Create New Task</h3>
              <button 
                className="modal-close"
                onClick={() => setShowNewTaskForm(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleAddTask} className="task-form">
              <div className="form-group">
                <label htmlFor="task-title">Task Title *</label>
                <input
                  type="text"
                  id="task-title"
                  value={newTask.title}
                  onChange={e => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter task title"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="task-description">Description</label>
                <textarea
                  id="task-description"
                  value={newTask.description}
                  onChange={e => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter task description"
                  className="form-input"
                  rows={3}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="task-priority">Priority</label>
                  <select
                    id="task-priority"
                    value={newTask.priority}
                    onChange={e => setNewTask(prev => ({ ...prev, priority: e.target.value as any }))}
                    className="form-input"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="task-due-date">Due Date</label>
                  <input
                    type="date"
                    id="task-due-date"
                    value={newTask.dueDate}
                    onChange={e => setNewTask(prev => ({ ...prev, dueDate: e.target.value }))}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="task-assignee">Assignee</label>
                <input
                  type="text"
                  id="task-assignee"
                  value={newTask.assignee}
                  onChange={e => setNewTask(prev => ({ ...prev, assignee: e.target.value }))}
                  placeholder="Enter assignee name"
                  className="form-input"
                />
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn ghost"
                  onClick={() => setShowNewTaskForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn primary">
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

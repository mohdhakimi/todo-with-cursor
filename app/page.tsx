"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Edit2, Check, X } from "lucide-react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editValue, setEditValue] = useState("")

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false,
        },
      ])
      setInputValue("")
    }
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const startEditing = (id: number, text: string) => {
    setEditingId(id)
    setEditValue(text)
  }

  const saveEdit = (id: number) => {
    if (editValue.trim()) {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: editValue.trim() } : todo)))
      setEditingId(null)
      setEditValue("")
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action()
    }
  }

  const activeTodos = todos.filter((todo) => !todo.completed).length
  const completedTodos = todos.filter((todo) => todo.completed).length

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">My Todo List</h1>
          <p className="text-center text-muted-foreground mt-2">Stay organized and productive</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            {/* Add Todo Input */}
            <div className="flex gap-2 mb-6">
              <Input
                type="text"
                placeholder="Add a new task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, addTodo)}
                className="flex-1"
              />
              <Button onClick={addTodo} className="bg-indigo-600 hover:bg-indigo-700">
                Add Task
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
              <span>Active: {activeTodos}</span>
              <span>Completed: {completedTodos}</span>
              <span>Total: {todos.length}</span>
            </div>

            {/* Todo List */}
            <div className="space-y-3">
              {todos.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg">No tasks yet!</p>
                  <p className="text-sm mt-2">Add your first task to get started</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleComplete(todo.id)}
                      className="mt-0.5"
                    />

                    {editingId === todo.id ? (
                      <Input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, () => saveEdit(todo.id))}
                        className="flex-1"
                        autoFocus
                      />
                    ) : (
                      <span
                        className={`flex-1 ${
                          todo.completed ? "line-through text-muted-foreground" : "text-foreground"
                        }`}
                      >
                        {todo.text}
                      </span>
                    )}

                    <div className="flex gap-2">
                      {editingId === todo.id ? (
                        <>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => saveEdit(todo.id)}
                            className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={cancelEdit}
                            className="h-8 w-8 text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => startEditing(todo.id, todo.text)}
                            className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => deleteTodo(todo.id)}
                            className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            Built with React & Next.js • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

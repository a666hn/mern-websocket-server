import { Router } from 'express'

// Import controller
import TodoController from '../controllers/todo.controller'

const Route = Router()

Route.post('/new-todo', TodoController.CreateNewTodo)
Route.get('/get-todo', TodoController.GetAllTodo)

export default Route

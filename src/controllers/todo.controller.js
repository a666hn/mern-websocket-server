import Todo from '../models/todo.model'

const TodoController = {
	CreateNewTodo: async (req, res) => {
		const newTodo = new Todo({
			name: req.body.name,
			body: req.body.body,
		})

		try {
			await newTodo.save()
			await res.status(200).send('Success create todo')
		} catch (err) {
			console.error('errors :> ', err.message)
		}
	},

	GetAllTodo: async (req, res) => {
		try {
			const response = await Todo.find().exec()
			req.io.sockets.emit('fetch-all-todo', response)
			return res.status(200).send({ status: 200, message: 'Fetch All Todo' })
		} catch (err) {}
	},
}

export default TodoController

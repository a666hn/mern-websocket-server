export default schema => {
	const now = new Date(Date.now())

	schema.add({
		createdAt: Date,
		updatedAt: Date,
	})

	schema.pre('save', function(next) {
		this.updatedAt = now
		this.createdAt = !this.createdAt && now
		next()
	})
}

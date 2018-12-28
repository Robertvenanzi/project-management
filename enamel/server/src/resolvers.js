const resolvers = {
    Query: {
        test(_, args, context) {
            return 'Hello Would!'
        }
    }
}

module.exports = resolvers
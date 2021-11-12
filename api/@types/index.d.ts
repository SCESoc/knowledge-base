export { }

declare global {
	namespace Express {
		interface Request {
			treatment?: any
		}
	}
}
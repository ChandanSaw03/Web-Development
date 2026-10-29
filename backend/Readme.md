# chai aur backend series

This is a video series on backend with javascript
-[Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## Database setup

Copy `.env.sample` to `.env` and set `MONGODB_URI` to your MongoDB connection string.
URL-encode any special characters in the username or password (for example, `@` as
`%40`). The app appends the `videotube` database name to the URI when connecting.
In MongoDB Atlas, add your current IP address under **Network Access**; avoid
allowing access from every IP. Start the backend with `npm run dev`.
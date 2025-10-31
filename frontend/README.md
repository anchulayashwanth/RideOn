RideOn frontend (Vite + React + Tailwind)

Install:

1. cd frontend
2. npm install
3. npm run dev

The frontend expects the backend API at http://localhost:5000/api

Optional linting (stylelint):

- This project includes a `.stylelintrc.json` which ignores Tailwind at-rules.
- To enable stylelint checks install dev deps in `frontend`:

	npm install -D stylelint stylelint-config-standard

After installing, you can run stylelint against your CSS files.

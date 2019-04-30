## APP Url
`http://localhost:8000/`

## API URLS
### All Employees
```javascript
// Request Method: GET
http://localhost:8000/api/employees
```

### Employee by ID
```
// Request Method: GET
http://localhost:8000/api/employee/id
```

### Employee by ID
```
// Request Method: POST
http://localhost:8000/api/employee/create
```

```json
// Body
{
    "name": "John Doe",
    "salary": 2000,
    "age": 29
}
```
```json
// Response
{
    "success": true,
    "data": {
        "name": "John Doe",
        "salary": "20000",
        "age": "20",
        "id": "13681"
    }
}
```

## Commands
- Install NPM Dependencies `~ yarn`

- Run APP
`~ yarn start`

- Run APP Development
`~ yarn dev`

- Test APP
`~ yarn test`
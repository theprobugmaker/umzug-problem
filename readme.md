# Usage

1. `docker-compose up -d`
2. `yarn db:migrate --create example.ts --folder database/migrations` (error)
3. `yarn db:migrate up` (nothing happens)

# Solution

- https://github.com/sequelize/umzug/issues/468

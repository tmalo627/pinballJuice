import pg from 'pg'
    const { Client } = pg
    const client = new Client ({
        user: 'postgres',
        password: '',
        host: 'localhost',
        database: 'pinball',
    })
    await client.connect()

import pg from 'pg'
    const { Client } = pg
    const client = new Client ({
        user: 'postgres',
        password: 'chestNut(red).27',
        host: 'localhost',
        database: 'pinball',
    })
    await client.connect()
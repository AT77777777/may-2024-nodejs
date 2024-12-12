const http = require('node:http');

const foo = async () => {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const port = server.address().port;

        res.end(JSON.stringify({
            data: `Live server successfully started on port ${port}`,
        }));
    });

    server.listen(8000, () => {
        console.log(`Server is running on port 8000`);
    });
};

void foo();

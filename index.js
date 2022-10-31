const http=require('http');

const PORT = 3000;

server.on((req, res)=>{
    if (req.url=== '/friends')
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        id: 1,
        name: 'Sir Isaac Newton',
    }));

} elseif (req.url==='/messages'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Isaac Newton !</li>');
    res.write('<li>What do you think about SpaceX !</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}});
server.listen(PORT, ()=>{
    console.log(`Listening on port ${3000}...`)
});
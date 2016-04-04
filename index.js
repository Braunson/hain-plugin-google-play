'use strict';

module.exports = (context) => {
    const shell = context.shell;

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }
        
        res.add({    
            id: query_trim,
            payload: 'global',
            title: 'Search for ' + query_trim,
            desc: 'Search on Google Play'
        });
        
        res.add({
            id: query_trim,
            payload: 'music',
            title: 'Search for ' + query_trim,
            desc: 'Search on Google Play in Android Apps'
        });
        
        res.add({
            id: query_trim,
            payload: 'music',
            title: 'Search for ' + query_trim,
            desc: 'Search on Google Play in Music'
        });
        
        res.add({
            id: query_trim,
            payload: 'movies',
            title: 'Search for ' + query_trim,
            desc: 'Search on Google Play in Movies'
        });
        
        res.add({
            id: query_trim,
            payload: 'books',
            title: 'Search for ' + query_trim,
            desc: 'Search on Google Play in Books'
        });
        
        res.add({
            id: query_trim,
            payload: 'newsstand',
            title: 'Search for ' + query_trim,
            desc: 'Search on Google Play in Newsstand'
        });
        
        res.add({
            id: query_trim,
            payload: 'devices',
            title: 'Search for ' + query_trim,
            desc: 'Search on Google Play in Devices'
        });
    }

    function execute(id, payload) {        
        if(payload == 'global') {
            shell.openExternal(`https://www.producthunt.com/search?q=${id}`);
            return;
        }
        
        if(payload == 'apps') {
            shell.openExternal(`https://www.producthunt.com/search?q=${id}&c=apps`);
            return;
        }
        
        if(payload == 'music') {
            shell.openExternal(`https://play.google.com/store/search?q=${id}&c=music`);
            return;
        }
        
        if(payload == 'movies') {
            shell.openExternal(`https://play.google.com/store/search?q=${id}&c=movies`);
            return;
        }
        
        if(payload == 'books') {
            shell.openExternal(`https://play.google.com/store/search?q=${id}&c=books`);
            return;
        }
        
        if(payload == 'newsstand') {
            shell.openExternal(`https://play.google.com/store/search?q=${id}&c=newsstand`);
            return;
        }
        
        if(payload == 'devices') {
            shell.openExternal(`https://play.google.com/store/search?q=${id}&c=devices`);
            return;
        }
        
        return;
    }

    return {search, execute};
};
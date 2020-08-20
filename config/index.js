module.exports = {
    getDbConnectionString: function(){
        // return 'mongodb://localhost:27017';
        return 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';
    }
}
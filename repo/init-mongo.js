db.createUser(
    {
        user : "jestrada",
        pwd : "password",
        roles : [
            {
                role : "readWrite",
                db : "testdb"
            }
            
        ]
    }
)
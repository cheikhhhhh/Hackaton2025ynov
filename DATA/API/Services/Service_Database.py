from Models.Database import Database 

class Service_Database:
    def __init__(self):
        pass

    def recuperer_list_utilisateur_example(self):
        try:
            db = Database()
            data = db.recuperer_list_utilisateur_example()

        except Exception as e:
            db.close()
            raise e
        
        return data
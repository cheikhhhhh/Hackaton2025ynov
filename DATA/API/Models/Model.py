class Model:
    def __init__(self):
        pass

    def test(self, chaine):
        try:
            chaine = chaine + "test"
        except Exception as e:
            raise e
        
        return str(chaine)
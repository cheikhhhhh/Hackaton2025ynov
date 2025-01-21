from Models.Model import Model

class Service_Model:
    def __init__(self):
        pass

    def test(self, chaine):
        try:
            chaine = Model().test(chaine)
        except Exception as e:
            raise e

        return chaine

import boto3
from botocore.exceptions import ClientError

class Database:

    def __init__(self):
        secret_name = "rds!cluster-7ad6ee45-cb3d-4564-a395-9a04a6df5a74"
        region_name = "eu-west-3"

        # Create a Secrets Manager client
        session = boto3.session.Session()
        client = session.client(
            service_name='secretsmanager',
            region_name=region_name
        )

        try:
            get_secret_value_response = client.get_secret_value(
                SecretId=secret_name
            )

        except ClientError as e:
            # For a list of exceptions thrown, see
            # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
            print("except")
            raise e
        
        secret = get_secret_value_response['SecretString']

    def recuperer_list_utilisateur_example(self):
        print("recuperer_list_utilisateur_example")
        return self.secret
import boto3
import psycopg2
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

        # get username
        secret_username = get_secret_value_response['SecretString'].split(",")[0].split(":")[1].replace('"', '')
        secret_password = get_secret_value_response['SecretString'].split(",")[1].split(":")[1].replace('"', '').replace("}", '')

        # Connect to the PostgreSQL database
        try:
            self.connection = psycopg2.connect(
                database="postgres",
                user=secret_username,
                host='database-smarteco.cluster-ro-ctm0qxufzcly.eu-west-3.rds.amazonaws.com',
                password=secret_password,
                port=5432
            )
            self.connection.autocommit = True
        except psycopg2.Error as e:
            print("Error connecting to the database.")
            raise e

    def recuperer_list_utilisateur_example(self):
        """
        Retrieves a list of users from the database.
        """
        try:
            with self.connection.cursor() as cursor:
                cursor.execute("SELECT id, nom, email FROM utilisateurs;")
                utilisateurs = cursor.fetchall()
                return utilisateurs
        except psycopg2.Error as e:
            print("Error retrieving user list.")
            raise e

    def close(self):
        """
        Closes the database connection.
        """
        if self.connection:
            self.connection.close()
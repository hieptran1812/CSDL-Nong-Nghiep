from flask_pymongo import pymongo
import urllib 

database_name = "csdlnn"

client = pymongo.MongoClient("mongodb+srv://hiep:hackathon@cluster0.eriug.mongodb.net/csdlnn?retryWrites=true&w=majority")
db = client.get_database(database_name)



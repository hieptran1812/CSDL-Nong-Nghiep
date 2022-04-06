# import sys

import logging
logging.basicConfig(filename='server.log', format='%(asctime)s - %(levelname)s - %(message)s', level=logging.DEBUG)
from flask import Flask, jsonify, request, session, redirect
from flask_pymongo import pymongo
from flask_cors import CORS, cross_origin

import json
import uvicorn

from bson import ObjectId
# from configDB import db
logging.info("Start API")

database_name = "csdlnn"

# client = pymongo.MongoClient("mongodb+srv://hiep:hackathon@cluster0.eriug.mongodb.net/csdlnn?retryWrites=true&w=majority")
import sys
client = pymongo.MongoClient("mongodb+srv://hiep:hackathon@cluster0.loo8n.mongodb.net/csdlnn?retryWrites=true&w=majority")
db = client.get_database(database_name)

app = Flask(__name__)
cors = CORS(app)
app.config['JSON_AS_ASCII'] = False
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin()
def running():
  return "API running..."

################ Sign in, sign out ##################

# @app.route('/api/login', methods=['POST'])
# def index():
#   if request.method == 'POST':
#     return login()

# @app.route('/api/signUp', methods=['POST'])
# def register():
#   return signUp()

# @app.route('/api/forgotpassword', methods=['POST'])
# def postForgotPassword():
#   return forgotPassword()

################ Dashboard ##############

@app.route('/api/dashboardList/', methods=['GET'])
def getDashboard():
  devices = []
  # print(currentUser['role'])
  for doc in db.dientich.find({}):
    devices.append({
      'id': str(ObjectId(doc['_id'])),
      'hangmuc': doc['hangmuc'],
      'nam2006': doc['nam2006'],
      'nam2007': doc['nam2007'],
      'nam2008': doc['nam2008'],
      'nam2010': doc['nam2010'],
    })
  return jsonify(devices)

################ User ##################
# @app.route('/api/addUser', methods=['POST'])
# def createUser():
#   res = request.get_json()
#   userData = {
#     'name': res['name'],
#     'username': res['username'],
#     'password': res['password'],
#     'organization': res['organization'],
#     'email': res['email'],
#     'phone': res['phone'],
#     'address': res['address'],
#     'role': res['role'],
#     'notes': res['notes'],
#     'dateRegistered': res['dateRegistered'],
#     'dueDate': res['dueDate'],
#   }
#   user = db.User.find_one({ 
#       'username': res['username']
#   })
#   if user:
#       return 'nguoi dung da ton tai', 404
#   else:
#       insertUser = db.User.insert_one(userData)
#       return 'hoan thanh', 200


@app.route('/api/users', methods=['GET'])
def getUsers():
  devices = []
  # print(currentUser['role'])
  for doc in db.nangsuat.find({}):
    devices.append({
      'id': str(ObjectId(doc['_id'])),
      'hangmuc': doc['hangmuc'],
      'nam2006': doc['nam2006'],
      'nam2007': doc['nam2007'],
      'nam2008': doc['nam2008'],
      'nam2010': doc['nam2010'],
    })
  return jsonify(devices)

# @app.route('/api/users/<id>', methods=['GET'])
# def getUserDetail(id):
#   if request.method == 'GET':
#     user = db.User.find_one({'_id': ObjectId(id)})
#     res = {}
#     res['name'] = user['name']
#     res['username'] = user['username'],
#     res['role'] = user['role'],
#     res['email'] = user['email'],
#     res['phone'] = user['phone'],
#     res['organization'] = user['organization'],
#     res['address'] = user['address'],
#     res['notes'] = user['notes']
#     res['dateRegistered'] = user['dateRegistered'],
#     res['dueDate'] = user['dueDate'],
#     return jsonify(res), 200

# @app.route('/api/user/delete/<id>', methods=['GET'])
# def deleteUser(id):
#   db.User.delete_one({'_id': ObjectId(id)})
#   return 'hoan thanh', 200

# @app.route('/api/editUser/<id>', methods=['POST'])
# def updateUser(id):
#   res = request.get_json()
#   db.User.update_one({'_id': ObjectId(id)}, {"$set": {
#     'name': res['name'],
#     'email': res['email'],
#     'phone': res['phone'],
#     'address': res['address'],
#     'notes': res['notes'],
#     'password': res['password'],
#   }})
#   return 'hoan thanh', 200


# ################ san luong ##################

# @app.route('/api/newRectifier', methods=['POST'])
# def addRectifier():
#   logging.info("start API add new Rectifier")
#   res = request.get_json()
#   deviceRectifierTransformer = {
#     'devSerial': str(res['id']),
#     'maChuoi': str(res['maChuoi']),
#     'organization': str(res['organization']),
#     'area': res['area'],
#     'dateUpdate': res['dateUpdate'],
#     'date': res['date'],
#     'lat': float(res['lat']),
#     'lng': float(res['lng']),
#     'connect': ["Chua ket noi bo do nao!"],
#     'ACInputPower':res['ACInputPower'],
#   }
#   return 'hoan thanh', 200

# @app.route('/api/rectifierTransformerNameList/', methods=['GET'])
# def getNameRT():
#   devices = []
#   for doc in db.RectifierTransformersDetails.find({}):
#     if(currentUser['role'] == 'superadmin'):
#       devices.append({'maChuoi': doc['maChuoi'],})
#     else:
#       if(doc['organization'] == currentUser['organization']):
#         devices.append({'maChuoi': doc['maChuoi'],})
#   return jsonify(devices)

@app.route('/api/rectifierTransformerList/', methods=['GET'])
def get():
  devices = []
  # print(currentUser['role'])
  for doc in db.sanluong.find({}):
    devices.append({
      'id': str(ObjectId(doc['_id'])),
      'hangmuc': doc['hangmuc'],
      'nam2006': doc['nam2006'],
      'nam2007': doc['nam2007'],
      'nam2008': doc['nam2008'],
      'nam2010': doc['nam2010'],
    })
  return jsonify(devices)

if __name__ == "__main__":
    print('run App......')
    # app.run(port=5000,host='0.0.0.0',ssl_context=("../../../../../etc/nginx/certs/cpsmart_net.crt", "../../../../../etc/nginx/certs/cpsmart_net.key"), threaded=True)
    # uvicorn("app:app", port=5000,host='0.0.0.0')
    app.run(port=5000,host='0.0.0.0')
    
    

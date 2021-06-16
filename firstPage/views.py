import json
import json.decoder
from json.decoder import JSONDecodeError, JSONDecoder
from pickle import loads
from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

import joblib
from joblib.numpy_pickle import load
import pandas as pd
import  requests
model=joblib.load('C:\loan_prediction\loan_prediction_project\pfa\modele_pipeline.pkl')

def scoreJson(request):
   
    data=json.loads(request.body) 
    dataF=pd.DataFrame({'x':data}).transpose()
    dataF = dataF[['Gender', 'Married','Dependents', 'Education', 'Self_Employed', 'ApplicantIncome','CoapplicantIncome','LoanAmount','Loan_Amount_Term','Credit_History','Property_Area']] 
    score=model.predict_proba(dataF)[:,-1][0]
    score=float(score)
    return JsonResponse({'score':score})

def scoreFile(request):
    return JsonResponse('')




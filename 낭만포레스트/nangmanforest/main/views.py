from django.shortcuts import render, redirect
from .models import *


def home(request):
    return render(request, 'home.html')
    
def edit(request):
    return render(request, 'edit.html')
    

    
def profile(request):
    return render(request, 'profile.html')

def new(request):
    return render(request, 'new.html')

def create(request):
    new_nangman = Nangman()
    new_nangman.title = request.POST['title']
    new_nangman.writer = request.user
    new_nangman.image = request.FILES['image']
    new_nangman.content = request.POST['content']
    new_nangman.quest = request.POST['quest']
    new_nangman.save()
    return redirect('nangman')

def edit(request, id):
    edit_nangman = Nangman.objects.get(id=id)
    return render(request, 'edit.html', {'nangman': edit_nangman})

def update(request, id):
    update_nangman = Nangman.objects.get(id=id)
    update_nangman.title = request.POST['title']
    update_nangman.writer = request.user
    update_nangman.image = request.FILES['image']
    update_nangman.content = request.POST['content']
    update_nangman.quest = request.POST['quest']
    update_nangman.save()
    return redirect('nangman')

def delete(request, id):
    delete_nangman = Nangman.objects.get(id=id)
    delete_nangman.delete()
    return redirect('nangman')

def nangman(request):
    nangmans = Nangman.objects.all()
    return render(request, 'home.html', {'nangmans': nangmans})

def detail(request, id):
    detail_nangman = Nangman.objects.get(id=id)
    return render(request, 'detail.html', {'detail_nangman' : detail_nangman})
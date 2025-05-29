from django.shortcuts import render

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })

def view(request, name):
    view = util.get_entry(f"{name}")

    if view == None:
        return render(request, "encyclopedia/error.html", {
            "title":name
        })
    return render(request, "encyclopedia/view.html", {
        "title":name,
        "view":view
    })

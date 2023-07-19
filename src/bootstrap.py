from dash import html
# this is where the components will end up.

## functions should return dash html or dcc objects and apply bootstrap classes

def container(children):
    return html.Div(children=children, className="container")

def row(children):
    return html.Div(children=children, className="row")

def col(children, width):
    return html.Div(children=children, className=f"col-{width}")

def navbar(children):
    return html.Nav(
        html.Div(
            html.A(children, className="navbar-brand"),
            className="container-fluid"
        ), className="navbar bg-body-tertiary")

def footer(children):
    pass

def card_button(text, link_to):
    pass

def button(text, id):
    pass
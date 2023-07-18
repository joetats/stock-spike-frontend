from dash import html
# this is where the components will end up.

## functions should return dash html or dcc objects and apply bootstrap classes

def container(children):
    return html.Div(children=children, className="container")

def row(children):
    return html.Div(children=children, className="row")


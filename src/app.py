from dash import Dash, html
from bootstrap import row, column

external_stylesheets = ["https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"]

app = Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = row([
    column("hello", 4),
    column("col", 4),
    column("width", 4)
])

if __name__ == "__main__":
    app.run(debug=True)

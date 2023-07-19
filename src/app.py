from dash import Dash, html
from bootstrap import row, col, navbar

external_stylesheets = ["https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"]

app = Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = navbar("stock spike")

if __name__ == "__main__":
    app.run(debug=True)

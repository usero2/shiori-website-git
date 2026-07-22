import http.server
import os
import sys

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Remove query parameters/hashes to get physical path
        clean_path = self.path.split('?')[0].split('#')[0]
        physical_path = self.translate_path(clean_path)
        
        # If the path requested does not exist physically as-is (e.g. "/download"),
        # but the path with ".html" extension does exist (e.g. "/download.html"),
        # we rewrite the internal request path to load the HTML file.
        if not os.path.exists(physical_path):
            if os.path.exists(physical_path + '.html') and not physical_path.endswith('/'):
                self.path = clean_path + '.html'
            elif os.path.exists(os.path.join(physical_path, 'index.html')):
                # Fallback to index.html if it's a folder
                pass

        super().do_GET()

if __name__ == '__main__':
    port = 8990
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
    
    server = http.server.HTTPServer(('localhost', port), CleanURLHandler)
    print(f"Starting server on http://localhost:{port} (Clean URLs supported)")
    print(f"To stop the server, press Ctrl+C.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")

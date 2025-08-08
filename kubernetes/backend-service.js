---
apiVersion: v1
kind: Service
metadata:
  name: backend-service
  namespace: wanderlust
spec:
  type: NodePort
  selector:
    app: backend
  ports:
    - port: 8080         # Service port (used inside the cluster)
      targetPort: 8005   # Container port(in which application/container is runnng)
      protocol: TCP
      nodePort: 31102    # New node port (ensure it's between 30000–32767 and not used elsewhere)


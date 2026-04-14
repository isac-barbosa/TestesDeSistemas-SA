
const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/notebooks", notebookRoutes);

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
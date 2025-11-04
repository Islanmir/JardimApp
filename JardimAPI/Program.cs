using JardimAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ----------------------------------------------
// 🔹 Adicionar controladores e Swagger
// ----------------------------------------------
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ----------------------------------------------
// 🔹 Configurar ligação ao MySQL
// ----------------------------------------------
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// ----------------------------------------------
// 🔹 Ativar CORS (para permitir acesso da app Expo)
// ----------------------------------------------
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTudo",
        policy => policy
            .AllowAnyOrigin()   // permite qualquer origem (app móvel)
            .AllowAnyMethod()   // GET, POST, PUT, DELETE
            .AllowAnyHeader()); // autorizações e cabeçalhos
});

// ----------------------------------------------
// 🔹 Construir aplicação
// ----------------------------------------------
var app = builder.Build();

// ----------------------------------------------
// 🔹 Configurar middlewares
// ----------------------------------------------

// Swagger — só em ambiente de desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ⚠️ Temporariamente desativado para o Expo aceder sem HTTPS
// app.UseHttpsRedirection();

app.UseAuthorization();

// Ativar CORS
app.UseCors("PermitirTudo");

// Mapear controladores
app.MapControllers();

// Iniciar aplicação
app.Run();



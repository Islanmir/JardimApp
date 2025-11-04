namespace JardimAPI.Models
{
    public class Planta
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string? Tipo { get; set; }
        public string? Descricao { get; set; }
        public string? ImagemUrl { get; set; }
    }
}

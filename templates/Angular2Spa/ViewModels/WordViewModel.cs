using System;

namespace DefinicjePL.ViewModels
{
    public class WordViewModel
    {
        public int? ID { get; set; }
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public DateTime? WhenCreated { get; set; }
    }
}
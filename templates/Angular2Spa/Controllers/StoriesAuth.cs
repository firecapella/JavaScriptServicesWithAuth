using Angular2Spa.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2Spa.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize]
    public class StoriesAuth : Controller
    {
        public ApplicationDbContext _db;

        public StoriesAuth(ApplicationDbContext context)
        {
            _db = context;
        }

        [HttpGet]
        public IEnumerable<Story> Get()
        {
            return _db.Stories.ToList();
        }

        [HttpPost]
        public void Post([FromBody] Story data)
        {
            Story story = new Story
            {
                content = data.content,
                timeOfAdding = DateTime.Now,
                numberOfViews = 0
            };
            _db.Stories.Add(story);
            _db.SaveChanges();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Oakie2.Models;

namespace Oakie2.Controllers
{
    public class PlayersController : ApiControllerBase
    {

        // GET api/players
        //[Authorize]
        public IEnumerable<Player> Get()
        {
            try
            {
                var user = User.Identity.Name;
            }
            catch (Exception e)
            {
                System.Diagnostics.Trace.WriteLine("there was error...");
            }

            var x = new List<Player>
                {
                    new Player {Id = 1, PlayerName = "Joe", Points = 22},
                    new Player {Id = 2, PlayerName = "Mark", Points = 22},
                    new Player {Id = 3, PlayerName = "Phil", Points = 22},
                    new Player {Id = 4, PlayerName = "Pete", Points = 22},
                    new Player {Id = 5, PlayerName = "Dave", Points = 22},
                    new Player {Id = 6, PlayerName = "Eric", Points = 22},
                    new Player {Id = 7, PlayerName = "Ivan", Points = 22},
                    new Player {Id = 8, PlayerName = "Paul", Points = 22},
                    new Player {Id = 9, PlayerName = "Tom", Points = 22},
                    new Player {Id = 10, PlayerName = "Brian", Points = 22}
                };

            return x;
        }

    }
}

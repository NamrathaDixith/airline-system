using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AirlineWebAPI.Models;
using System.Data.Entity;

namespace AirlineWebAPI.Controllers
{
    public class UserMessageController : ApiController
    {
        AirlineEntities8 db = new AirlineEntities8();

        public IEnumerable<UserQuery> GetQuery()
        {
            return db.UserQueries.ToList();
        }

        public UserQuery GetQuery(int id)
        {
            return db.UserQueries.Find(id);
        }


        [HttpPost]
        public HttpResponseMessage AddQuery(UserQuery model)
        {
            try
            {
                db.UserQueries.Add(model);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }


        [HttpDelete]
        public HttpResponseMessage DeleteQuery(int id)
        {
            try
            {
                UserQuery model = db.UserQueries.Find(id);
                if (model != null)
                {
                    db.UserQueries.Remove(model);
                    db.SaveChanges();
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }

        [HttpPut]
        public HttpResponseMessage UpdateQuery(int id, UserQuery model)
        {
            try
            {
                if (id == model.SlNo)
                {
                    db.Entry(model).State = EntityState.Modified;
                    db.SaveChanges();
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
    }
}

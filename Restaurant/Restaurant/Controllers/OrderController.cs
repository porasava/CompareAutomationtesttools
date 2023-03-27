using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class OrderController : Controller
    {
        // GET: Item
        public ActionResult ItemIndex()
        {
            using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
                return View(dbmodel.Items.ToList());
        }


        public ActionResult DeleteItem(string id)
        {
            using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
                return View(dbmodel.Items.Where(x => x.ItemId.ToString() == id).FirstOrDefault());
        }

        // POST: /Delete/5
        [HttpPost]
        public ActionResult DeleteItem(string id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
                using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
                {
                    Item item = dbmodel.Items.FirstOrDefault(x => x.ItemId.ToString() == id);
                    dbmodel.Items.Remove(item);
                    dbmodel.SaveChanges();
                }
                return RedirectToAction("ItemIndex", "Order");
            }
            catch
            {
                return View("ItemIndex", "Order");
            }

        }

        [HttpGet]
        public ActionResult AddItem(int id = 0)
        {
            Item userModel = new Item();
            return View(userModel);
        }
        [HttpPost]
        public ActionResult AddItem(Item userModel)
        {
            RestaurantDBEntities dbModel = new RestaurantDBEntities();

            if (dbModel.Items.Any(x => x.ItemName == userModel.ItemName))
            {
                ViewBag.DuplicateMessage = "This Menu already exist!!";
                return View("AddItem", userModel);
            }
            dbModel.Items.Add(userModel);
            dbModel.SaveChanges();

            ModelState.Clear();
            ViewBag.SuccessMessage = "Add new Menu successful.";
            return View("AddItem", new Item());
        }

       // //GET: /Delete/5
        //public ActionResult DeleteOrder(string id)
        //{
        //    using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
        //        return View(dbmodel.Orders.Where(x => x.OrderId.ToString() == id).FirstOrDefault());
        //}

       // //POST: /Delete/5
        //[HttpPost]
        //public ActionResult DeleteOrder(string id, FormCollection collection)
        //{
        //    try
        //    {
       // //    TODO: Add delete logic here
        //        using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
        //        {
        //            Order order = dbmodel.Orders.FirstOrDefault(x => x.OrderId.ToString() == id);
        //            dbmodel.Orders.Remove(order);
        //            dbmodel.SaveChanges();
        //        }
        //        return RedirectToAction("OrderIndex");
        //    }
        //    catch
        //    {
        //        return View("OrderIndex");
        //    }
        //}


        // GET: Order
        public ActionResult OrderIndex()
        { using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
           // return View(dbmodel.Orders.ToList());
            return View(dbmodel.Orders.OrderByDescending(x => x.OrderDate).ToList());
        }

        public ActionResult CustomerIndex()
        {
            using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
               // return View(dbmodel.Customers.ToList());
            return View(dbmodel.Customers.OrderByDescending(x => x.CustomerName).ToList());
        }

        // GET: /Delete/5
        public ActionResult DeleteCustomer(string id)
        {
            using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
                return View(dbmodel.Customers.Where(x => x.CustomerId.ToString() == id).FirstOrDefault());
        }

        // POST: /Delete/5
        [HttpPost]
        public ActionResult DeleteCustomer(string id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
                using (RestaurantDBEntities dbmodel = new RestaurantDBEntities())
                {
                    Customer customer = dbmodel.Customers.FirstOrDefault(x => x.CustomerId.ToString() == id);
                    dbmodel.Customers.Remove(customer);
                    dbmodel.SaveChanges();
                }
                return RedirectToAction("CustomerIndex","Order");
            }
            catch
            {
                return View("CustomerIndex", "Order");
            }

        }
    }
}

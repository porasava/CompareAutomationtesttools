using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Restaurant.Models;


namespace Restaurant.Controllers
{
    public class UserController : Controller
    {
        [HttpGet]
        public ActionResult AddorEdit(int id = 0)
        {
            Customer userModel = new Customer();
            return View(userModel);
        }
        [HttpPost]
        public ActionResult AddOrEdit(Customer userModel)
        {
            RestaurantDBEntities dbModel = new RestaurantDBEntities();
            
                if (dbModel.Customers.Any(x => x.CustomerName == userModel.CustomerName))
                {
                    ViewBag.DuplicateMessage = "Username already exist.";
                    return View("AddOrEdit", userModel);
                }
                dbModel.Customers.Add(userModel);
                dbModel.SaveChanges();
            
            ModelState.Clear();
            ViewBag.SuccessMessage = "Registration successful.";
            return View("AddOrEdit", new Customer());
        }


        public ActionResult AdminLogin()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Autherizee(AdminUser Adminuser)
        {
            using (RestaurantDBEntities db = new RestaurantDBEntities())
            {
                var AdminuserDetails = db.AdminUsers.Where(x => x.AdminUsername == Adminuser.AdminUsername
                  && x.AdminPassword == Adminuser.AdminPassword).FirstOrDefault();
                if (AdminuserDetails == null)
                {
                    Adminuser.AdminLoginErrorMessage = "Wrong Username or Password";
                    return View("AdminLogin", Adminuser);
                }
                else
                {
                    Session["AdminUserID"] = AdminuserDetails.AdminId;
                    Session["AdminUserName"] = AdminuserDetails.AdminUsername;
                    return RedirectToAction("Index", "Home");
                }
            }

        }
        [HttpGet]
        public ActionResult AdminRegister(int id = 0)
        {
            AdminUser AdmindbModel = new AdminUser();
            return View(AdmindbModel);
        }

        [HttpPost]
        public ActionResult AdminRegister(AdminUser AdminuserModel)
        {
            using (RestaurantDBEntities AdmindbModel = new RestaurantDBEntities())
            {
                if (AdmindbModel.AdminUsers.Any(x => x.AdminUsername == AdminuserModel.AdminUsername))
                {
                    ViewBag.DuplicateMessage = "Username already exist.";
                    return View("AdminRegister", AdminuserModel);
                }
                AdmindbModel.AdminUsers.Add(AdminuserModel);
                AdmindbModel.SaveChanges();
            }
            ModelState.Clear();
            ViewBag.SuccessMessage = "Registration successful.";
            return View("AdminRegister", new AdminUser());
        }


        public ActionResult AdminLogOut()
        {
            int userId = (int)Session["AdminUserID"];

            Session.Abandon();
            return RedirectToAction("AdminLogin", "User");
        }


    }
}

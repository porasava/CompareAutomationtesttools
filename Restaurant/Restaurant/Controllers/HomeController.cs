using Restaurant.Models;
using Restaurant.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Restaurant.ViewModel;
using Restaurant.ViewModels;

namespace Restaurant.Controllers
{
  
    public class HomeController : Controller
    {
        private readonly RestaurantDBEntities restaurantDBEntities;
        
        public HomeController()
        {
            restaurantDBEntities = new RestaurantDBEntities();
        }

        public ActionResult Index()
        {//Use our customer repository
            CustomerRepository objCustomerRepository = new CustomerRepository();
            ItemRepository objitemRepository = new ItemRepository();
            PaymentTypeRepository objpaymentTypeRepository = new PaymentTypeRepository();
           var objMultipleModels = new Tuple<IEnumerable<SelectListItem>,IEnumerable<SelectListItem>,IEnumerable<SelectListItem>>
                (objCustomerRepository.GetAllCustomers(), objitemRepository.GetAllItems(),objpaymentTypeRepository.GetAllPaymentType());
            return View(objMultipleModels);
        }

        [HttpGet]
        public JsonResult getItemUnitPrice(int itemId)
        {
            decimal UnitPrice = restaurantDBEntities.Items.Single(model => model.ItemId == itemId).ItemPrice;
            return Json(UnitPrice, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Index(OrderViewModel objOrderViewModel)
        {//add into the database
            OrderRepository objOrderRepository = new OrderRepository();
            objOrderRepository.AddOrder(objOrderViewModel);
            return Json("Order has been Successfully Placed.", JsonRequestBehavior.AllowGet);
        }



    }
}
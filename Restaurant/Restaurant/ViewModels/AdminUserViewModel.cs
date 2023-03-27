using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Restaurant.ViewModels
{
    public class AdminUserViewModel
    {
        public int AdminId { get; set; }
        [Required(ErrorMessage = "Please enter username ")]
        [DisplayName("Username")]
        public string AdminUsername { get; set; }
        [Required(ErrorMessage = "Please enter Password ")]
        [DataType(DataType.Password)]
        [DisplayName("Password")]
        public string AdminPassword { get; set; }
        [DataType(DataType.Password)]
        [DisplayName("Confirm Password")]
        [Compare("AdminPassword")]
        [Required(ErrorMessage = "Please enter Confirm Password ")]
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
        [Required(ErrorMessage = "Please enter Firstname ")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Please enter Lastname ")]
        public string LastName { get; set; }
        public Nullable<bool> IsAdmin { get; set; }
        public string AdminLoginErrorMessage { get; set; }
    }
}
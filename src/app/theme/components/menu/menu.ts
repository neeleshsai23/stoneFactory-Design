import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const horizontalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const adminMenuItems = [

    new Menu(1, 'Analytics', '/superadmin/analytics', null, 'analytics', null, true, 0, "white"),
    new Menu(2, 'Members', '/superadmin/members', null, 'group', null, true, 0, "#FDE599"),
    new Menu(3, 'Packages', '/superadmin/packages', null, 'business_center', null, true, 0, "white"),
    // new Menu(3.1, 'Leads', '/superadmin/sales/leads', null, 'group', null, true, 3, "white"),
    // new Menu(3.2, 'Prospects', '/superadmin/sales/prospects', null, 'outlined_flag', null, true, 3, "white"),
    // new Menu(3.3, 'Constant Contact', '/superadmin/sales/constantcontacts', null, 'contact_page', null, true, 3, "white"),
    new Menu(4, 'Logs', '/superadmin/logs', null, 'payments', null, true, 0, "white"),
    // new Menu(5, 'Visits', '/superadmin/visits', null, 'today', null, true, 0, "white"),
  
    new Menu(8, 'Admin', '/superadmin/admin', null, 'person', null, true, 0, "white"),
    new Menu(9, 'Manage Users', '/superadmin/admin/users', null, 'group_add', null, false, 8, "white"),
    new Menu(10, 'Settings', '/superadmin/admin/settings', null, 'settings_applications', null, false, 8, "white"),
    new Menu(11, 'Lookup Options', '/superadmin/admin/lookup', null, 'zoom_in', null, false, 8, "white"),
    // new Menu(12, 'Master Data', '/superadmin/admin/masterdata/industry', null, 'group', null, false, 8, "white"),
    new Menu(13, 'View Master', '/superadmin/admin/view-master', null, 'today', null, false, 8, "white"),
    new Menu(14, 'Pattern Master', '/superadmin/admin/pattern-master', null, 'announcement', null, false, 8, "white"),
    new Menu(15, 'Language Master', '/superadmin/admin/language-master', null, 'language', null, false, 8, "white"),

]

export const salesMenuItems = [

    new Menu(1, 'Analytics', '/member/analytics', null, 'analytics', null, true, 0, "white"),
    new Menu(2, 'Setup', '/member/setup', null, 'settings_applications', null, true, 0, "#FDE599"),
    /*new Menu(2.1, 'Categories', '/member/setup/category', null, 'group', null, true, 2, "white"),
    new Menu(2.2, 'Products', '/member/setup/products', null, 'category', null, true, 2, "white"),
    new Menu(2.3, 'Filters', '/member/setup/filters', null, 'filter_list', null, true, 2, "white"),
    new Menu(2.4, 'Specs', '/member/setup/specs', null, 'polymer', null, true, 2, "white"),*/

    new Menu(3, 'My Account', '/member/myaccount', null, 'account_balance_wallet', null, true, 0, "white"),
    new Menu(3.1, 'Subscription', '/member/myaccount/subscription', null, 'group', null, false, 3, "white"),
  
    new Menu(3.2, 'Preferences ', '/member/myaccount/Preferences', null, 'today', null, false, 3, "white"),
    new Menu(4, 'Enquiries', '/member/enquiries', null, 'announcement', null, true, 0, "white"),
    new Menu(6, 'Showroom', '/showroom', null, 'web_asset', null, true, 0, "white"),
    // new Menu(7, 'Config', '/member/config', null, 'layers', null, true, 0, "white"),
]

 
export const customerMenuItems = [

    new Menu(1, 'Transactions', '/customers/transaction', null, 'business_center', null, true, 0, "white"),
    new Menu(2, 'Messages', '/customers/overview', null, 'analytics', null, true, 0, "white"),
    
]
export default [{
        _name: "CSidebarNavTitle",
        _children: ["Configuration"]
    },
    // data center
    {
        _name: "CSidebarNavDropdown",
        name: "Data Center",
        icon: "cil-description",
        items: [{
                _name: "CSidebarNavItem",
                name: "วัตถุประสงค์",
                to: "/configuration/data_center/objectives",
            },
            {
                _name: "CSidebarNavItem",
                name: "หมายเลขบัตรเข้าอาคาร",
                to: "/configuration/data_center/building_cards",
            },
            {
                _name: "CSidebarNavItem",
                name: "หมายเลขบัตรเข้าศูนย์ปฏิบัติการ",
                to: "/configuration/data_center/data_center_cards",
            }
        ]
    },
    // change request
    {
        _name: "CSidebarNavDropdown",
        name: "Change Request",
        icon: "cil-history",
        items: [{
                _name: "CSidebarNavItem",
                name: "เหตุผลที่ขอเปลี่ยนแปลง",
                to: "/configuration/change_request/reasons",
            },
            {
                _name: "CSidebarNavItem",
                name: "ระบบที่เกี่ยวข้อง",
                to: "/configuration/change_request/related-systems",
            },
            {
                _name: "CSidebarNavItem",
                name: "เอกสารแนบ",
                to: "/configuration/change_request/attachments",
            }
        ]
    },
];
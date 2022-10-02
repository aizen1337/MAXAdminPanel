export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 70
    },
    {
        field: "login",
        headerName: "Login",
        width: 230,
        renderCell:(params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} />
                    {params.row.login}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "phoneNumber",
        headerName: "Numer Telefonu",
        width: 200,
    },
    {
        field: "status",
        headerName: "Status",
        width: 200,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]

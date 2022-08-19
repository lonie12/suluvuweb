import DashboardView from "../Shared/components/DashboardView";

export default function Dashboard() {

    return (
        <div style={{width: '94%', margin: '10px auto 0 auto', height: '100%'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between',}}>
                <DashboardView title="Commandes clients" data="40" color="#F06B6B" />
                <DashboardView title="Article en stock" data="40" color="green" />
                <DashboardView title="Commandes Fr/s" data="40" color="#1E1E1E" />
            </div>

            <div style={{height: `calc(100% - 130px)`, marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '60%', height: '100%', background: 'white', margin: 0}}></div>
                <div style={{width: '35%', height: '100%', background: 'white', margin: 0}}></div>
            </div>
        </div>
    )
}
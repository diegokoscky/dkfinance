import Card from "../Cards/Card";
import CardStats from "../Cards/CardStats";

export default function DashboardComponent() {
    return (
        <main className="main-content">
            <div className="container">
                <div className="main-content-wrapper">
                    <div className="row">
                        <div className="col-3">
                            <CardStats
                                title="WEGE3"
                                value="1.250,54"
                                image="/images/android-chrome-192x192.png"
                                profit={68.65}
                            />
                        </div>
                        <div className="col-3">
                            <CardStats
                                title="ITUB4"
                                value="978,20"
                                image="/images/android-chrome-192x192.png"
                                profit={49.76}
                            />
                        </div>
                        <div className="col-3">
                            <CardStats
                                title="LEVE3"
                                value="638,28"
                                image="/images/android-chrome-192x192.png"
                                profit={42.12}
                            />
                        </div>
                        <div className="col-3">
                            <CardStats
                                title="FLRY3"
                                value="490,94"
                                image="/images/android-chrome-192x192.png"
                                profit={-5.68}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Card title="Carteira Ideal" />
                        </div>
                        <div className="col-4">
                            <Card title="Carteira Hoje" />
                        </div>
                        <div className="col-4">
                            <Card title="Setores" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Card title="Rentabilidade" />
                        </div>
                        <div className="col-6">
                            <Card title="Performance" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

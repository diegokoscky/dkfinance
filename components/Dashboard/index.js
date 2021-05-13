import Card from "../Cards/Card";
import CardStats from "../Cards/CardStats";
import CardGraphDoughnut from "../Cards/CardGraphDoughnut";
import CardGraphLine from "../Cards/CardGraphLine";

export default function DashboardComponent() {
    const tabelaDetalhesObj = [
        {
            id: 1,
            acao: "WEGE3",
            investido: 950.0,
            total: 1200.5,
            lucro: 30.0,
        },
        {
            id: 2,
            acao: "ITUB4",
            investido: 820.0,
            total: 1100.5,
            lucro: 40.0,
        },
        {
            id: 3,
            acao: "ABEV",
            investido: 340.0,
            total: 550.5,
            lucro: 32.5,
        },
        {
            id: 4,
            acao: "LEVE3",
            investido: 475.0,
            total: 570.5,
            lucro: 25.5,
        },
        {
            id: 5,
            acao: "FLRY3",
            investido: 245.0,
            total: 470.5,
            lucro: 90.5,
        },
        {
            id: 6,
            acao: "VALE3",
            investido: 425.0,
            total: 470.5,
            lucro: 15.0,
        },
    ];

    return (
        <main className="main-content">
            <div className="container">
                <div className="main-content-wrapper">
                    <div className="row">
                        <div className="col-3">
                            <CardStats
                                title="WEGE3"
                                value={1250.43}
                                image="/images/android-chrome-192x192.png"
                                profit={68.65}
                            />
                        </div>
                        <div className="col-3">
                            <CardStats
                                title="ITUB4"
                                value={978.2}
                                image="/images/android-chrome-192x192.png"
                                profit={49.76}
                            />
                        </div>
                        <div className="col-3">
                            <CardStats
                                title="LEVE3"
                                value={638.28}
                                image="/images/android-chrome-192x192.png"
                                profit={42.12}
                            />
                        </div>
                        <div className="col-3">
                            <CardStats
                                title="FLRY3"
                                value={490.94}
                                image="/images/android-chrome-192x192.png"
                                profit={-5.68}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <CardGraphDoughnut
                                title="Posições"
                                items={[
                                    "WEGE3",
                                    "ITUB4",
                                    "LEVE3",
                                    "FLRY3",
                                    "VALE3",
                                    "SQIA3",
                                ]}
                                values={[30, 20, 20, 15, 10, 5]}
                            />
                        </div>
                        <div className="col-8">
                            <CardGraphLine
                                title="Performance"
                                items={[
                                    "Dez",
                                    "Jan",
                                    "Fev",
                                    "Mar",
                                    "Abr",
                                    "Mai",
                                ]}
                                values={[10, 20, 15, 18, 5, 22]}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Card
                                title="Detalhes por ação"
                                type="table"
                                content={tabelaDetalhesObj}
                            />
                        </div>
                        <div className="col-6">
                            <Card
                                title="Rentabilidade"
                                type="text"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor justo vitae tellus mollis euismod. Proin augue felis, mattis sit amet magna at, tempor placerat nibh. Etiam suscipit tempor turpis non pellentesque. Curabitur tempor viverra nibh eu pulvinar. Pellentesque tempor lacus enim, sit amet tristique nibh euismod non."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

import type { Request, Response } from "express";
export function seriesController(req: Request, res: Response) {
  res.render("../views/pages/series.html", {
    meta: {
      title: "My series",
    },
    headerData: {
      title: "My series",
      subTitle: "These are my series!",
    },
  });
}
